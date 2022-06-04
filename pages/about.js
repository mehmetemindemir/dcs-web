
import Head from 'next/head'
import Layout from "../components/Layout";
import {withAuthorization} from "./util/withAuthorization";
const About=() =>{
    
  return (
      <>
        <Head>
          <title>Login Page</title>
          <link rel="icon" href="/favicon.ico"/>
        </Head>
        <Layout >
            <div className="flex flex-row ">
                <div className="flex-1">About</div>


                    
            </div>

            <div className="flex flex-row  ">

            </div>



        </Layout>
      </>

  )
}

export default withAuthorization(About);