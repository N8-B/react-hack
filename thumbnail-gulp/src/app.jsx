var options = {
  thumbnailData: [{
    header: 'Learn React',
    description: 'React is a JavaScript library for building user interfaces. React is a JavaScript library for building user interfaces.',
    title: 'Show Course',
    number: 12,
    imageUrl: "https://facebook.github.io/react/img/logo_og.png"
  },{
    header: 'Learn Gulp',
    description: 'Gulp will speed up your development workflow. Gulp will speed up your development workflow.',
    title: 'Show Course',
    number: 25,
    imageUrl: "http://brunch.io/images/others/gulp.png"
  }
  ]
};

var element = React.createElement(ThumbnailList, options);

React.render(element, document.querySelector('.container'))
