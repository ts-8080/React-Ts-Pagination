import React, { useState } from "react";
import "./Pagination.css";
import AlbumList from "./AlbumList";
import Album from "./type";
import ReactPaginate from "react-paginate";
{
  /* The following line can be included in your src/index.js or App.js file */
}
import "bootstrap/dist/css/bootstrap.min.css";

type Props = {
  albums: Album[];
};

const Pagination = (props: Props) => {
  const { albums } = props;

  const itemPerPage = 6; //任意で変更

  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemPerPage;

  const currentAlbums = albums.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(albums.length / itemPerPage);

  const handlePageClick = (e: { selected: number }) => {
    // console.log(e.selected);
    const newOffset = (e.selected * itemPerPage) % albums.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="albumWrapper">
      <AlbumList albums={albums} currentAlbums={currentAlbums} />
      <div className="paginateWrapper">
        <ReactPaginate
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="< previous"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
};

export default Pagination;
