import React from 'react'

const HeaderTable = ({isLoading, isFetching, header, setItemEdit}) => {

    const {store, dispatch} = React.useContext(StoreContext)
    const [isArchiving, setIsArchiving] = React.useState(0);
    const [id, setId] = React.useState('')

    let counter = 1

    const handleArchive = (item) => {
        dispatch(setIsActive(true));
        setId(item.header_aid)
        setIsArchiving(0)
    }
    const handleRestore = (item) => {
        dispatch(setIsActive(true));
        setId(item.header_aid)
        setIsArchiving(1)
    }

    const handleDelete = (item) => {
        dispatch(setIsDelete(true))
        setId(item.header_aid)
    }

    const handleEdit = (item) => {
        dispatch(setIsAdd(true))
        setItemEdit(item)
    }

  return (
    <>
    <div>

    <div className="table-wrapper relative">
        {isFetching && <SpinnerFetching/>}
            <table>
                <thead>
                    <tr>
                        <th className='w-[20px]'>#</th>
                        <th className='w-[150px]'>Logo</th>
                        <th className='w-[80px]'>Navigation 1</th>
                        <th className='w-[80px]'>Navigation 2</th>
                        <th className='w-[100px]'>Navigation 3</th>
                        <th className='w-[100px]'>Navigation 4</th>
                        <th className='w-[100px]'>Language 1</th>
                        <th className='w-[100px]'>Language 2</th>
                        <th className='w-[100px]'>Language 3</th>
                    </tr>
                </thead>
                <tbody>

                {isLoading && ( 
        <tr>
            <td colSpan={9}>
                <TableLoader count="20" cols="4"/>
            </td>
        </tr>)
        }

        {header?.data.length === 0 && (
            <tr>
                <td colSpan={9}>
                    <NoData/>
                </td>
            </tr>
        )}

            {header?.data.map((item, key)=>(
                <tr key={key}>
                <td>{counter++}</td>
                <td>{item.header_image}</td>
                <td>{item.header_nav_1}</td>
                <td>{item.header_nav_2}</td>
                <td>{item.header_nav_3}</td>
                <td>{item.header_nav_4}</td>
                <td>{item.header_lang_1}</td>
                <td>{item.header_lang_2}</td>
                <td>{item.header_lang_3}</td>
                <td>{item.header_publish_date}</td>
                <td className='table-action'>
                    <ul>
                        {item.header_is_active ? (
                            <>
                                <li><button className="tooltip" data-tooltip="Edit" onClick={()=>handleEdit(item)}><LiaEdit/></button></li>
                                <li><button onClick={()=>handleArchive(item)} className="tooltip" data-tooltip="Archive" ><PiArchive /></button></li>
                            </>
                        ) : (
                            <>
                            <li><button className="tooltip" data-tooltip="Restore" onClick={()=>handleRestore(item)}><LiaHistorySolid/></button></li>
                            <li><button className="tooltip" data-tooltip="Delete" onClick={()=>handleDelete(item)} ><LiaTrashAltSolid/></button></li></>
                        )}
                    </ul>
                </td>
            </tr>  
            ))}
                    
            </tbody>
        </table>
    </div>
    </div>

    {store.isActive && <ModalConfirm position="center" queryKey="header" endpoint={`/v1/header/active/${id}`} 
        isArchiving={isArchiving}/>}

    {store.isDelete && <ModalDelete position="center" endpoint={`/v1/header/${id}`} 
    queryKey="header"/>}

    {/* {isSuccess && <Toast setIsSuccess={setIsSuccess} message={message}/>} */}
    </>
  )
}

export default HeaderTable