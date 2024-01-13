


  const createQuestion = async () => {
    const data = { user_id: userId, questions: addQ };

    const response = await baseInstance.post('/questions', data);

    if (response.status === 201) setPoll(response.data.poll_id);
    navigate(`/answerroom/${response.data.poll_id}`);
  };