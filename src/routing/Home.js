import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from '../components/Layout';
import CategroiesTable from '../components/tables/CategoriesTable';
import ManufacturerTable from '../components/tables/ManufacturerTable';
import ItemsTable from '../components/tables/ItemsTable';
import ProductsTable from '../components/tables/ProductsTable';
import StashyTable from '../components/tables/StashyTable';

const Home = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/categories" component={CategroiesTable} />
        <Route path="/manufacturer" component={ManufacturerTable} />
        <Route path="/items" component={ItemsTable} />
        <Route path="/products" component={ProductsTable} />
        <Route path="/stashy" component={StashyTable} />
      </Switch>
    </Layout>
  );
};

export default Home;
