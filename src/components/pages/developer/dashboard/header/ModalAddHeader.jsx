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
        header_image: itemEdit ? itemEdit.header_image : "",
        header_nav_1: itemEdit ? itemEdit.header_nav_1 : "",
        header_nav_2: itemEdit ? itemEdit.header_nav_2 : "",
        header_nav_3: itemEdit ? itemEdit.header_nav_3 : "",
        header_nav_4: itemEdit ? itemEdit.header_nav_4 : "",
        header_lang_1: itemEdit ? itemEdit.header_nav_1 : "",
        header_lang_2: itemEdit ? itemEdit.header_nav_2 : "",
        header_lang_3: itemEdit ? itemEdit.header_nav_3 : "",
        header_publish_date: itemEdit ? itemEdit.header_publish_date : "",
    }

    const yupSchema = Yup.object({
        header_image: Yup.string().required('Required'),
        header_nav_1: Yup.string().required('Required'),
        header_nav_2: Yup.string().required('Required'),
        header_nav_3: Yup.string().required('Required'),
        header_nav_4: Yup.string().required('Required'),
        header_lang_1: Yup.string().required('Required'),
        header_lang_2: Yup.string().required('Required'),
        header_lang_3: Yup.string().required('Required'),
        header_publish_date: Yup.string().required('Required'),
    })

  return (
    <ModalWrapper>
    <div className="main-modal w-[300px] bg-secondary text-content h-full">
              <div className="modal-header p-4 relative">
                  <h2>New Header</h2>
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
                              label="Header Logo"
                              type="text"
                              name="header_image"
                          />
                      </div>
                      <div className="input-wrap">
                          <InputText
                              label="Navigation 1"
                              type="text"
                              name="header_nav_1"
                          />
                      </div>
                      <div className="input-wrap">
                          <InputText
                              label="Navigation 2"
                              type="text"
                              name="header_nav_2"
                          />
                      </div>
                      <div className="input-wrap">
                          <InputText
                              label="Navigation 3"
                              type="text"
                              name="header_nav_3"
                          />
                      </div>
                      <div className="input-wrap">
                          <InputText
                              label="Navigation 4"
                              type="text"
                              name="header_nav_4"
                          />
                      </div>
                      <div className="input-wrap">
                          <InputText
                              label="Header Language 1"
                              type="text"
                              name="header_lang_1"
                          />
                      </div>
                      <div className="input-wrap">
                          <InputText
                              label="Header Language 2"
                              type="text"
                              name="header_lang_2"
                          />
                      </div>
                      <div className="input-wrap">
                          <InputText
                              label="Header Language 3"
                              type="text"
                              name="header_lang_3"
                          />
                      </div>

                      <div className="input-wrap">
                          <InputText
                              label="Publish Date"
                              type="text"
                              name="header_publish_date"
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

export default ModalAddHeader