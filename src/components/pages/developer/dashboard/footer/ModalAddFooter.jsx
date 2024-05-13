import React from 'react'

const ModalAddFooter = ({itemEdit}) => {

    const{store, dispatch} = React.useContext(StoreContext);
    const handleClose = () => dispatch(setIsAdd(false));

    const queryClient = useQueryClient();
    
    const mutation = useMutation({
        mutationFn: (values) =>
        queryData(
            itemEdit ? `/v1/footer/${itemEdit.footer_aid}` :`/v1/footer` ,
            itemEdit ? "put" : "post",
            values
        ),

        onSuccess: (data) => {
        queryClient.invalidateQueries({ queryKey: ["footer"] });
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
        footer_image: itemEdit ? itemEdit.footer_image : "",
        footer_copyright: itemEdit ? itemEdit.footer_copyright : "",
        footer_link_1: itemEdit ? itemEdit.footer_link_1 : "",
        footer_link_2: itemEdit ? itemEdit.footer_link_2 : "",
        footer_link_3: itemEdit ? itemEdit.footer_link_3 : "",
        footer_link_4: itemEdit ? itemEdit.footer_link_4 : "",
        footer_phone: itemEdit ? itemEdit.footer_phone : "",
        footer_email: itemEdit ? itemEdit.footer_email : "",
        footer_address: itemEdit ? itemEdit.footer_address : "",
        footer_publish_date: itemEdit ? itemEdit.footer_publish_date : "",
    }

    const yupSchema = Yup.object({
        footer_image: Yup.string().required('Required'),
        footer_copyright: Yup.string().required('Required'),
        footer_link_1: Yup.string().required('Required'),
        footer_link_2: Yup.string().required('Required'),
        footer_link_3: Yup.string().required('Required'),
        footer_link_4: Yup.string().required('Required'),
        footer_phone: Yup.string().required('Required'),
        footer_email: Yup.string().required('Required'),
        footer_address: Yup.string().required('Required'),
        footer_publish_date: Yup.string().required('Required'),
    })

  return (
    <ModalWrapper>
    <div className="main-modal w-[300px] bg-secondary text-content h-full">
              <div className="modal-header p-4 relative">
                  <h2>New Footer</h2>
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
                              label="Logo"
                              type="text"
                              name="footer_image"
                          />
                      </div>
                      <div className="input-wrap">
                          <InputText
                              label="Copyright"
                              type="text"
                              name="footer_copyright"
                          />
                      </div>

                      <div className="input-wrap">
                      <InputText
                              label="Footer Link 1"
                              type="text"
                              name="footer_link_1"
                          />
                      </div>
                      <div className="input-wrap">
                      <InputText
                              label="Footer Link 2"
                              type="text"
                              name="footer_link_2"
                          />
                      </div>
                      <div className="input-wrap">
                      <InputText
                              label="Footer Link 3"
                              type="text"
                              name="footer_link_3"
                          />
                      </div>
                      <div className="input-wrap">
                      <InputText
                              label="Footer Link 4"
                              type="text"
                              name="footer_link_4"
                          />
                      </div>
                      <div className="input-wrap">
                      <InputText
                              label="Footer Mobile Number"
                              type="text"
                              name="footer_phone"
                          />
                      </div>
                      <div className="input-wrap">
                      <InputText
                              label="Email"
                              type="text"
                              name="footer_email"
                          />
                      </div>
                      <div className="input-wrap">
                      <InputText
                              label="Address"
                              type="text"
                              name="footer_address"
                          />
                      </div>

                      <div className="input-wrap">
                          <InputText
                              label="Publish Date"
                              type="text"
                              name="footer_publish_date"
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

export default ModalAddFooter