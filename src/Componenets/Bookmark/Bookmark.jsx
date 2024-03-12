import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className='bg-white p-4 m-4 rounded-xl'>
            <h1>{title}</h1>
        </div>
    );
};

Bookmark.propTypes ={
    bookmark: PropTypes.object
}
export default Bookmark;