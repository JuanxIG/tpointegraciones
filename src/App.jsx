// src/App.js
import React from 'react';
import { Layout } from 'antd';
import Sidebar from './sidebar';
import './App.css';

const { Header, Content } = Layout;

function App() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <Layout>
        <Header style={{ padding: 0, background: '#fff', textAlign: 'center' }}>
          <h1>Mi Sitio Web</h1>
        </Header>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div
            style={{
              padding: 24,
              background: '#fff',
              textAlign: 'center',
            }}
          >
            <h2>Contenido principal</h2>
            <p>Este es el contenido principal de la página.</p>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
