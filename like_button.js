'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

// npx terser -c -m -o like_button.min.js -- like_button.js

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);