function UserIdPage(props) {
  return <h1>{props.id}</h1>;
}

export default UserIdPage;

export async function getServerSideProps(context) {
  const { params } = context;

  const userId = params.user_id;

  return {
    props: {
      id: 'userid-' + userId,
    },
  };
}
