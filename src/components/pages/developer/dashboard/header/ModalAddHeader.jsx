import React from 'react'

const ModalAddHeader = ({itemEdit}) => {

    const{store, dispatch} = React.useContext(StoreContext);
    const handleClose = () => dispatch(setIsAdd(false));

    const queryClient = useQueryClient();
    
    const mutation = useMutation({
        mutationFn: (values) =>
        queryData(
            itemEdit ? `/v1/header/${itemEdit.header_aid}` :`/v1/header` ,
            itemEdit ? "put" : "post",
            values
        ),

        onSuccess: (data) => {
        queryClient.invalidateQueries({ queryKey: ["header"] });
        if (data.success) {
            dispatch(setIsAdd(false));
            dispatch(setSuccess(true));
            dispatch(setMessage(`Successfuly updated.`));
        }else{
            dispatch(setError(true))
            dispatch(setMessage(data.error))
        }
        },
    });

    const initVal = {
        header_title: itemEdit ? itemEdit.header_title : "",
        header_category: itemEdit ? itemEdit.header_category : "",
        header_image: itemEdit ? itemEdit.header_image : "",
        header_description: itemEdit ? itemEdit.header_description : "",
        header_publish_date: itemEdit ? itemEdit.header_publish_date : "",
    }

    const yupSchema = Yup.object({
        // header_title: Yup.string().required('Required'),
        header_category: Yup.string().required('Required'),
        header_image: Yup.string().required('Required'),
        header_description: Yup.string().required('Required'),
        header_publish_date: Yup.string().required('Required'),
    })

  return (
    <div>ModalAddHeader</div>
  )
}

export default ModalAddHeader