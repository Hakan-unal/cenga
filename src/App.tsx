import { Row } from 'antd';
import certificate from "./assets/sertifika.pdf";



const App = () => {

  return (<Row justify={"center"}>

    <object data={certificate} type="application/pdf" width={1000} height={500} />


  </Row>
  )
}


export default App;