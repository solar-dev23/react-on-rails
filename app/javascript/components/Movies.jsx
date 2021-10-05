import React, { useEffect, useState } from "react";
import { Table, message, Popconfirm } from "antd";
import AddMovieModal from "./AddMovieModal";

function Movies() {
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Summary",
      dataIndex: "summary",
      key: "summary",
    },
    {
      title: "Year",
      dataIndex: "year",
      key: "year",
    },
    {
      title: "Genre",
      dataIndex: "genre",
      key: "genre",
    },
    {
      title: "Link",
      dataIndex: "link",
      key: "link",
    },
    {
      title: "",
      key: "action",
      render: (_text, record) => (
        <Popconfirm
          title="Are you sure delete this beer?"
          onConfirm={() => deleteMovie(record.id)}
          okText="Yes"
          cancelText="No"
        >
          <a href="#" type="danger">
            Delete{" "}
          </a>
        </Popconfirm>
      ),
    },
  ];

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = () => {
    const url = "api/v1/movies/index";
    fetch(url)
      .then((data) => {
        if (data.ok) {
          return data.json();
        }
        throw new Error("Network error.");
      })
      .then((data) => {
        data.forEach((movie) => {
          const newEl = {
            key: movie.id,
            id: movie.id,
            title: movie.title,
            summary: movie.summary,
            year: movie.year,
            genre: movie.genre,
            link: movie.link,
          };

          setMovies(() => [...movies, newEl]);
        });
      })
      .catch((err) => message.error("Error: " + err));
  };

  const reloadMovies = () => {
    setMovies([]);
    loadMovies();
  };

  const deleteMovie = (id) => {
    const url = `api/v1/movies/${id}`;

    fetch(url, {
      method: "delete",
    })
      .then((data) => {
        if (data.ok) {
          reloadMovies();
          return data.json();
        }
        throw new Error("Network error.");
      })
      .catch((err) => message.error("Error: " + err));
  };

  return (
    <>
      <Table
        className="table-striped-rows"
        dataSource={movies}
        columns={columns}
        pagination={{ pageSize: 5 }}
      />

      <AddMovieModal reloadMovies={reloadMovies} />
    </>
  );
}

export default Movies;
