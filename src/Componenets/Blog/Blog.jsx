import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";

const Blog = ({blog}) => {
    const {title,coverImage,authorName,authorImage,readingTime,postedDate,hashtags} = blog;
    return (
        <div className="my-4 py-2 flex flex-col gap-4">
            <img className="w-full" src={coverImage} alt={`Cover Picture of the title ${title}`} />
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <img className="w-14" src={authorImage} alt="" />
                    <div>
                        <h1 className="text-2xl">{authorName}</h1>
                        <h1 className="text-xl opacity-50">{postedDate}</h1>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <p className="text-xl">{readingTime} read</p>
                    <button className="text-2xl text-red-600"><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h1 className="text-3xl font-bold">{title}</h1>
            <p>
                {
                    hashtags.map((tag,idx)=> <span key={idx}><a href="">#{tag} </a></span> )
                }
            </p>
            <button className="bg-red-500 w-28">Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;