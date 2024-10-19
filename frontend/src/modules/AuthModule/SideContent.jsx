import { Space, Layout, Divider, Typography } from 'antd';
import logo from '@/style/images/main.jpeg';
import useLanguage from '@/locale/useLanguage';
import { useSelector } from 'react-redux';

const { Content } = Layout;
const { Title, Text } = Typography;

export default function SideContent() {
  const translate = useLanguage();

  return (
    <Content
      style={{
        padding: '150px 30px 30px',
        width: '100%',
        maxWidth: '450px',
        margin: '0 auto',
      }}
      className="sideContent"
    >
      <div style={{ width: '100%' }}>
        <img
          src={logo}
          alt="My logo"
          style={{ margin: '0 0 40px', display: 'block',filter:'invert(1)' }}
          height={150}
          
        />

        <Title level={1} style={{ fontSize: 28 }}>
          We are Group 6 
        </Title>
        <Text>
  Members:
  1. Palash Joshi 
  2. Atharv Joshi 
  3. Arushi Kadam 
  4. Vedant Sutar 
  5. Payal Powar 
  <br />
  <br />
  Guided By <b>Prof. Kavita Sultanpure</b>
  <p>
    Technologies we have used: 
    <br />
    Frontend: React 
    <br />
    Backend: Node.js 
    <br />
    Database: MongoDB Atlas (Cloud)
    <br />
    Database Connectivity: Mongoose 
    <br />
    Framework: Express.js 
    <br />
  </p>
</Text>


        <div className="space20"></div>
      </div>
    </Content>
  );
}
