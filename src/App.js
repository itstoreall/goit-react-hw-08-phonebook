import React, { Component, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import AppBar from './components/AppBar';
import Container from './components/Container';
import { authOperations } from './redux/auth';
import PrivateRoute from './components/Routes/PrivateRoute';
import PublicRoute from './components/Routes/PublicRoute';

// Code splitting
const HomeView = lazy(() =>
  import('./views/HomeView' /*webpackChunkName: "Home"*/)
);
const RegisterView = lazy(() =>
  import('./views/RegisterView' /*webpackChunkName: "Register"*/)
);
const LoginView = lazy(() =>
  import('./views/LoginView' /*webpackChunkName: "Login"*/)
);
const ContactsView = lazy(() =>
  import('./views/ContactsView' /*webpackChunkName: "Contacts"*/)
);

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <Container>
        <AppBar />

        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <PublicRoute path='/' exact component={HomeView} />
            <PublicRoute
              path='/register'
              restricted
              redirectTo='/contacts'
              component={RegisterView}
            />
            <PublicRoute
              path='/login'
              restricted
              redirectTo='/contacts'
              component={LoginView}
            />
            <PrivateRoute
              path='/contacts'
              redirectTo='/login'
              component={ContactsView}
            />
          </Switch>
        </Suspense>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);

/**
 * Before
 * 
import { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { contactsOperations, contactsSelectors } from './redux/contacts';
import Form from './components/PhonebookForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import { wrapper, title, subtitle, loading } from './App.module.scss';

function App({ handleSubmit, handleInputFilter, isLoading }) {
  useEffect(() => {
    contactsOperations.GET();
  });

  return (
    <div className={wrapper}>
      <h1 className={title}>Phonebook</h1>
      <Form onInputChange={handleInputFilter} onSubmit={handleSubmit} />
      <h2 className={subtitle}>
        Contacts {isLoading && <span className={loading}>Loading...</span>}
      </h2>
      <Filter />
      <ContactList />
    </div>
  );
}

const mapStateToProps = (state) => ({
  isLoading: contactsSelectors.getLoading(state),
});

const mapDispatchToProps = (dispatch) => {
  return {
    getContacts: () => dispatch(contactsOperations.GET()),
    handleSubmit: (newContact) => dispatch(contactsOperations.ADD(newContact)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
 */

/**
 * Connect (React компоненты)
 * - Props
 * - возвращает новый компонент, который
 * оборачивает наш компонент App и под капотом
 * подписывается к mapStateToProps и mapDispatchToProps
 */

/**
 * Container (React-Redux связь)
 * - mapStateToProps
 * - использует селекторы. Контейнер
 * кидает селектору весь стейт, а селекторы
 * обратно возвращают какойто value из стора.
 * Не контейнеры, не компоненты на прямую со
 * стором не работают. Container - это функция
 * connect, в которой делаются все подписки.
 * Контейнер через селектор получает кусочки
 * стора и кждый раз при обновлении стора
 * вызвыается mapStateToProps и компонент
 * обновляется новыми props.
 */

/**
 * Selector (Redux, часть логики)
 * - Store
 * - вспомогательная функция, получает
 * весь стор от контейнера, делает запрос в стор
 * и из себя возвращает это значение. Селектор
 * знает внутреннюю структуру стора. Его использует
 * контейнер при подписке mapStateToProps
 */

/**
 * Reducer
 * - Store
 * - обновляет стор. Получает предидущее состояние,
 * плюс payload из actions, обрабатывает, и делает
 * следующий стейт
 */
