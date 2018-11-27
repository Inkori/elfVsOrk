// var func1 = function BlogPost(postData) {
// 	return  `
// 	<div >
// 		<h2>${postDate["title"]}</h2>
// 	</div>
// 	<div>
// 		<h3><b>${postDate["autor"]}</b></h3>
// 	</div>
// 	<div>
// 		<p>${postDate["body"]}</p>
// 	</div>

// 	`;

// };

var id = 0;

var registr = {
	
}

class Component {
	constructor () {
		this.id = id++;
		registr[this.id] = this;	
	}
	
}

var postDate = {
  author: "SomeData",
  title: "title",
  body: "text test text"
};
var postTest = {
  author: "Jhon Dou",
  title: "someTitle",
  body: "Lorem lorem lorem"
};

class BlogPost extends Component {
  constructor({ author, title, body }) {
		super()
    this.state = {
      author,
      title,
			body
    };
	}
	chengeBody(value) {
	this.state.body	= value;
	document.querySelector("body").innerHTML = blog.render() + testBlog.render();
	}

  render() {
		
    const { author, title, body} = this.state;

		return `
		<div data-id = "${this.id + 1 }">
			
			<h2>${title}</h2>
		</div>
		<div>
			<h3><b>${author}</b></h3>
		</div>
		<div>
			<textarea onChange="registr[${this.id}].chengeBody(this.value)">${body}</textarea>
		</div>`;
  }
}
let blog = new BlogPost(postDate);
let testBlog = new BlogPost(postTest);
// let component = new Component();
document.querySelector("body").innerHTML = blog.render() + testBlog.render();

