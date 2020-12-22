import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from '../components/Layout';
import CategroiesTable from '../components/tables/CategoriesTable';
import ManufacturerTable from '../components/tables/ManufacturerTable';

const Home = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/categories" component={CategroiesTable} />
        <Route path="/manufacturer" component={ManufacturerTable} />
      </Switch>
    </Layout>
  );
};

export default Home;
