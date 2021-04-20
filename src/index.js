import * as $ from 'jquery';
import './styles/styles.css';
import Post from './Post';
import './styles/less.less';
import './styles/scss.scss';
import './babel';


const post = new Post('Webpack Post Title');

$('pre').html(post.toString());