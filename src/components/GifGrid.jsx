import useFetchGifs from '../hooks/useFetchGifs';
import GifItem from './GifItem';

const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs(category)

  return (
    <>
      <h3>{category}</h3>

      {isLoading && (
        <div class="circles-to-rhombuses-spinner">
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
        </div>)}

      {!isLoading && <div className='card-grid'>
        {images.map((image) => (
          <GifItem
            key={image.id}
            {...image}
          />))};
      </div>}

    </>
  )
};

export default GifGrid;