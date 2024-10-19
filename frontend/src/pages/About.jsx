import { Button, Result } from 'antd';

import useLanguage from '@/locale/useLanguage';

const About = () => {
  const translate = useLanguage();
  return (
    <Result
      status="info"
      title={'Made BY Palash Joshi '}
      subTitle={translate('Do you need help on customize of this app')}
      extra={
        <>
          <p>
            Website : <a href="">www.upwork.palashjoshi</a>{' '}
          </p>
          <p>
            GitHub :{' '}
            <a href="https://github.com/idurar/idurar-erp-crm">
              https://github.com/palashjoshi27
            </a>
          </p>
          <p>
            Phone  :{' '}
            <a href="">
              7709019804
            </a>
          </p>
          
        </>
      }
    />
  );
};

export default About;
