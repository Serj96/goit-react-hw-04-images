import { LoaderRoller } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderRoller className="lds-roller">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </LoaderRoller>
  );
};

export default Loader;
