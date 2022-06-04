
import Head from 'next/head'
import Layout from "../components/Layout";
import {withAuthorization} from "./util/withAuthorization";
const Contact=() =>{
    
  return (
      <>
        <Head>
          <title>Login Page</title>
          <link rel="icon" href="/favicon.ico"/>
        </Head>
        <Layout >
            <div className="flex flex-row ">
                <div className="flex-1">Contact</div>


                    
            </div>

            <div className="flex flex-row  ">

            </div>



        </Layout>
      </>

  )
}

export default withAuthorization(Contact);