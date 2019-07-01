import React, { Component, Fragment } from 'react';

import { Switch, Route } from 'react-router-dom';

import { Gallery } from 'components/Gallery';
import { Loading } from 'components/Loading';

import { PostContainer } from 'containers/PostContainer';

export class GalleryContainer extends Component {
  state = { pictures: [], loading: false, page: 1, total: null }

  componentDidMount() {
    if(!localStorage.getItem('token') || localStorage.getItem('token') === 'null') {
      return this.props.history.replace('/auth');
    }
    this.loadItems();
  }

  loadItems = () => {
    const { token } = this.props;
    const { page } = this.state;
    this.setState({ loading: true });

    fetch(`http://localhost:8888/api/photos?page=${page}`, {
      headers: {
        'Content-type': 'application/json',
        'authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        this.setState(prevState => ({
          loading: false,
          page: prevState.page + 1,
          total: data.total,
          pictures: prevState.pictures.concat(
            data.photos.map(photo => ({ id: photo._id, image: photo.image, likes: photo.likes.length, comments: photo.comments.length }))
          ),
        }));
      })
      .catch(() => {
        this.setState({ loading: false });
      });
  }

  renderItem = (picture) => {
    return (
      <div><img src={picture.image} /></div>
    )
  }

  shouldWeLoad = () => {
    const { pictures, loading, total } = this.state;

    return (total != null || total > pictures.length) && !loading;
  }

  handleScroll = () => {
    if(this.shouldWeLoad()) {
      this.loadItems();
    }
  }

  render() {
    const { pictures, loading } = this.state;

    return (
      <Fragment>
        {pictures.length > 0 && <Gallery onScroll={this.handleScroll} pictures={pictures} />}
        <Route path="/posts/:id" component={PostContainer} />
        {loading && <Loading />}
      </Fragment>
    );
  }
}
