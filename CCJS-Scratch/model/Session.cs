namespace CodeCamper.model
{
    public class Session
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int RoomId { get; set; }
        public string ImageSource { get; set; }
        // flat representation of data
        public string FirstName { get; set; }
        public string LastName { get; set; }


    }
}