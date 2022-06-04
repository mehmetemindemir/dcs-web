import DefaultButton from "../../Buttons/DefaultButton";

const PassengerListForCheckin=({passengers,detailEvet})=>{
    return(
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full mx-5">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-3 py-2">
                            S.No
                        </th>
                        <th scope="col" className="px-3 py-2">
                            PNR
                        </th>
                        <th scope="col" className="px-3 py-2">
                            Last Name
                        </th>
                        <th scope="col" className="px-3 py-2">
                            First Name
                        </th>
                        <th scope="col" className="px-3 py-2">
                            Type
                        </th>
                        <th scope="col" className="px-3 py-2">
                            class
                        </th>
                        <th scope="col" className="px-3 py-2">
                            Seat
                        </th>
                        <th scope="col" className="px-3 py-2">
                            Baggage
                        </th>
                        <th scope="col" className="px-3 py-3">
                            Flight
                        </th>
                        <th scope="col" className="px-3 py-2">
                            Detail
                        </th>
                        <th scope="col" className="px-3 py-2">
                            Status
                        </th>
                        <th scope="col" className="px-3 py-2"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {passengers.map((item)=>(
                        <tr key={item.bpId}  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 cursor-pointer">
                            <th scope="row"
                                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                {item.securityNumber}
                            </th>
                            <td className="px-3 py-2 ">
                                {item.locator}
                            </td>
                            <td className="px-3 py-2 ">
                                {item.lastName}
                            </td>
                            <td className="px-3 py-2 ">
                                {item.firstName}
                            </td>
                            <td className="px-3 py-2 ">
                                {item.paxType}
                            </td>
                            <td className="px-3 py-2 ">
                                {item.flightClass}
                            </td>
                            <td className="px-3 py-2 ">
                                {item.seatLn+item.seatCh}
                            </td>
                            <td className="px-3 py-2 ">
                                {item.luggageCount+'/'+item.luggageWeight}
                            </td>
                            <td className="px-3 py-2 bg-gray-600 text-white ">
                                <div className="flex-row">
                                    {item.passengerFlight}
                                </div>
                                <div className="flex-row">
                                    {item.departureDate}
                                </div>
                            </td>
                            <td className="px-3 py-2 ">
                                <DefaultButton OnClickHandle={()=>{detailEvet(item.bpId)}} Name="Detail"/>
                            </td>
                            <td className="px-3 py-2 ">
                                $2999
                            </td>
                            <td className="px-3 py-2 ">
                                <input id="default-checkbox" key={item.bpId} type="checkbox" value="" name="pass"
                                       className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                            </td>

                        </tr>
                    ))

                    }


                    </tbody>
                </table>
            </div>

        </>
    );
}
export default PassengerListForCheckin;