import { MoonLoader } from 'react-spinners';

interface isLoadingProps {
  isLoading: boolean;
}

const Loading: React.FC<isLoadingProps> = ({ isLoading }) => {
  return (
    <div className='flex justify-center '>
      <MoonLoader
        color='rgb(0, 145, 181)'
        loading={isLoading}
        size={24}
        aria-label='Loading Spinner'
        data-testid='loader'
      />
    </div>
  );
};

export default Loading;
