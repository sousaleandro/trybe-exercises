import React from "react";

class Album extends React.Component {
  render() {
    const { album } = this.props;
    return (
      <section>
        <img src={ album.image } alt={ album.title} />
        <h2>{ album.title }</h2>
        <p>Lançamento: { album.releaseDate.year }</p>
        <p>Gravadora: { album.others.recordCompany }</p>
        <p>Formatos: { album.others.formats }</p>
      </section>
    )
  }
}

export default Album;
