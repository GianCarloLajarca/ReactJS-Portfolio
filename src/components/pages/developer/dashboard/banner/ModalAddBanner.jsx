import React from 'react'

const ModalAddBanner = () => {

    const{store, dispatch} = React.useContext(StoreContext);
    const handleClose = () => dispatch(setIsAdd(false));

    const queryClient = useQueryClient();
    
    const mutation = useMutation({
        mutationFn: (values) =>
        queryData(
            itemEdit ? `/v1/banner/${itemEdit.banner_aid}` :`/v1/banner` ,
            itemEdit ? "put" : "post",
            values
        ),

        onSuccess: (data) => {
        queryClient.invalidateQueries({ queryKey: ["banner"] });
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
        banner_greet: itemEdit ? itemEdit.banner_greet : "",
        banner_image: itemEdit ? itemEdit.banner_image : "",
        banner_firstname: itemEdit ? itemEdit.banner_firstname : "",
        banner_lastname: itemEdit ? itemEdit.banner_lastname : "",
        banner_name: itemEdit ? itemEdit.banner_name : "",
        banner_description: itemEdit ? itemEdit.banner_description : "",
        banner_button: itemEdit ? itemEdit.banner_button : "",
        banner_scroll: itemEdit ? itemEdit.banner_scroll : "",
        banner_publish_date: itemEdit ? itemEdit.banner_publish_date : "",
    }

    const yupSchema = Yup.object({
        banner_greet: Yup.string().required('Required'),
        banner_image: Yup.string().required('Required'),
        banner_firstname: Yup.string().required('Required'),
        banner_lastname: Yup.string().required('Required'),
        banner_name: Yup.string().required('Required'),
        banner_description: Yup.string().required('Required'),
        banner_button: Yup.string().required('Required'),
        banner_scroll: Yup.string().required('Required'),
        banner_publish_date: Yup.string().required('Required'),
    })

  return (
    <ModalWrapper>
    <div className="main-modal w-[300px] bg-secondary text-content h-full">
              <div className="modal-header p-4 relative">
                  <h2>New Banner</h2>
                  <button className='absolute top-[25px] right-4' onClick={handleClose}><LiaTimesSolid/></button>
              </div>
              <div className="modal-body p-4">
                  <Formik
                      initialValues={initVal}
                      validationSchema={yupSchema}
                      onSubmit={async (values) => {
                          mutation.mutate(values)
                      }}
                  >
                      {(props) => {
                          return (
                      <Form  className='flex flex-col h-[calc(100vh-110px)]'>
                      <div className='grow overflow-y-auto'>
                          
                      <div className="input-wrap">
                          <InputText
                              label="Greetings"
                              type="text"
                              name="banner_greet"
                          />
                      </div>

                      <div className="input-wrap">
                      <InputText
                              label="Image"
                              type="text"
                              name="banner_image"
                          />
                      </div>
                      <div className="input-wrap">
                      <InputText
                              label="First Name"
                              type="text"
                              name="banner_firstname"
                          />
                      </div>
                      <div className="input-wrap">
                      <InputText
                              label="Last Name"
                              type="text"
                              name="banner_lastname"
                          />
                      </div>
                      <div className="input-wrap">
                      <InputText
                              label="Full Name"
                              type="text"
                              name="banner_name"
                          />
                      </div>
                      <div className="input-wrap">
                      <InputTextArea
                              label="Description"
                              type="text"
                              name="banner_description"
                              className='h-[10rem] resize-none'
                          />
                      </div>
                      <div className="input-wrap">
                      <InputTextArea
                              label="Button Name"
                              type="text"
                              name="banner_button"
                              className='h-[10rem] resize-none'
                          />
                      </div>
                      <div className="input-wrap">
                      <InputTextArea
                              label="Scroll Name"
                              type="text"
                              name="banner_scroll"
                              className='h-[10rem] resize-none'
                          />
                      </div>

                      <div className="input-wrap">
                          <InputText
                              label="Publish Date"
                              type="text"
                              name="banner_publish_date"
                          />
                      </div>
        
                      </div>

                      <div className='form-action'>
                          <button className='btn btn-form btn--accent' type="submit"> {mutation.isPending ? <SpinnerButton/> : "Add" }</button>
                          <button className='btn btn-form btn--cancel' type="button" onClick={handleClose}>Cancel</button>
                      </div>
                  </Form>)}}
                  
                  </Formik>
              </div>
      </div>
    </ModalWrapper>
  )
}

export default ModalAddBanner