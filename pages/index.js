import Head from "next/head";
import { useState } from "react";
import DefaultButton from "../components/Buttons/DefaultButton";
import Layout from "../components/Layout";
import { withAuthorization } from "./util/withAuthorization";
import { getPassengerList } from "../api/checkin/passenger";
import PassengerListForCheckin from "../components/Tables/PassengerList";
import AlertRed from "../components/Alert/AlertRed";
import Loader from "../components/loader";
import PassengerDetailModal from "../components/Modals/PassengerDetail";

const Home = () => {
  const [searchCriteria, setSearchCriteria] = useState("");
  const [passengerList, setPassengerList] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [bpId, setBpId] = useState("");
  const modalOff = () => {
    setShowModal(false);
  };
  const passengerDetail = (bpId) => {
    setShowModal(true);
    setBpId(bpId);
    console.log(bpId);
  };

  const searchPassenger = async () => {
    const reqData = {
      searchCriteria: searchCriteria,
      pageName: "PAXNAME",
      userName: "MED",
      otherLeg: null,
      destCode: "",
      yesterday: null,
      airlineCode: "N4",
    };
    //console.log(reqData.searchCriteria);
    setLoading(true);
    const passData = await getPassengerList(reqData);
    setLoading(false);
    if (
      passData.passData != null &&
      passData.passData.data != null &&
      passData.passData.data.length > 0
    ) {
      setPassengerList(
        <PassengerListForCheckin
          passengers={passData.passData.data}
          detailEvent={passengerDetail}
        />
      );
      console.log(passengerList);
    } else {
      setPassengerList(
        <AlertRed message="No available passenger has been found !!!" />
      );
    }
  };
  
  return (
    <>
    
      <Head>
        <title>NWSESYS-DCS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
      {loading?<Loader/>:''}
        <div className="flex flex-row ">
          <div className="flex-1"></div>
          <div className="flex-1 ">
            <form>
              <div className="relative mt-2">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none h-10">
                  <svg
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  value={searchCriteria}
                  onChange={(e) => setSearchCriteria(e.target.value)}
                  className="block   h-10 ml-2 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Passenger Name, Pnr , Ticket number..."
                  required=""
                />
              </div>
            </form>
          </div>
          <div className="flex-1">
            <DefaultButton
              OnClickHandle={searchPassenger}
              Name="Search"
            ></DefaultButton>
          </div>

        </div>
        <div className="flex flex-row  mt-5 ">{passengerList}</div>

        {showModal ?(
            <PassengerDetailModal closeModal={setShowModal} />
        ):null

        }

      </Layout>
    </>
  );
};
export default withAuthorization(Home);
