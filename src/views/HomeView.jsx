import s from './Views.module.scss';

const HomeView = () => (
  <div className={s.container}>
    <h1 className={s.title}>
      Home Page{' '}
      <span role='img' aria-label='Welcome icon'>
        🤓
      </span>
    </h1>
  </div>
);

export default HomeView;
