const Announcement = (props) => {
  const {data, attributes} = props ?? {};

  return (
    <div style={attributes.styles}>
      {data.title}
    </div>
  )
}

export default Announcement;