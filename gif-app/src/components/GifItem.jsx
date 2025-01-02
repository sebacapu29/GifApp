import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types'

export const GifItem = ({title, url, id}) => {
  return (
    <Card>
          <Card.Img variant="top" src={url} />
          <Card.Body>
             <Card.Title>{title}</Card.Title>
           </Card.Body>
        </Card>
  );
}

GifItem.prototype = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}