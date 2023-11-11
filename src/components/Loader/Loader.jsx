import { Vortex } from 'react-loader-spinner';
import { StyledLoader } from './Loader.styled';
const Loader = () => {
  return (
    <StyledLoader>
      <Vortex
        visible={true}
        height="80"
        width="80"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
      />
    </StyledLoader>
  );
};

export default Loader;
