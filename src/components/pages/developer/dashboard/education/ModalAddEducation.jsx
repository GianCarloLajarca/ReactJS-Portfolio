import React from 'react'

const ModalAddEducation = () => {
    const{store, dispatch} = React.useContext(StoreContext);
    const handleClose = () => dispatch(setIsAdd(false));

    const queryClient = useQueryClient();
    
    const mutation = useMutation({
        mutationFn: (values) =>
        queryData(
            itemEdit ? `/v1/education/${itemEdit.education_aid}` :`/v1/education` ,
            itemEdit ? "put" : "post",
            values
        ),

        onSuccess: (data) => {
        queryClient.invalidateQueries({ queryKey: ["education"] });
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
        education_title: itemEdit ? itemEdit.education_title : "",
        education_image: itemEdit ? itemEdit.education_image : "",
        education_description: itemEdit ? itemEdit.education_description : "",
        education_school: itemEdit ? itemEdit.education_school : "",
        education_date: itemEdit ? itemEdit.education_date : "",
        education_publish_date: itemEdit ? itemEdit.education_publish_date : "",
    }

    const yupSchema = Yup.object({
        education_title: Yup.string().required('Required'),
        education_image: Yup.string().required('Required'),
        education_description: Yup.string().required('Required'),
        education_school: Yup.string().required('Required'),
        education_date: Yup.string().required('Required'),
        education_publish_date: Yup.string().required('Required'),
    })

  return (
    <ModalWrapper>
    <div className="main-modal w-[300px] bg-secondary text-content h-full">
              <div className="modal-header p-4 relative">
                  <h2>New Education</h2>
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
                              label="Title"
                              type="text"
                              name="education_title"
                          />
                      </div>

                      <div className="input-wrap">
                      <InputText
                              label="Image"
                              type="text"
                              name="education_image"
                          />
                      </div>
                      <div className="input-wrap">
                      <InputTextArea
                              label="Description"
                              type="text"
                              name="education_description"
                              className='h-[10rem] resize-none'
                          />
                      </div>

                      <div className="input-wrap">
                          <InputText
                              label="School"
                              type="text"
                              name="education_school"
                          />
                      </div>
                      <div className="input-wrap">
                          <InputText
                              label="Date"
                              type="text"
                              name="education_date"
                          />
                      </div>

                      <div className="input-wrap">
                          <InputText
                              label="Publish Date"
                              type="text"
                              name="education_publish_date"
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

export default ModalAddEducation