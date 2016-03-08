using System;

namespace AmsDomain
{
    public abstract class Person
    {
        public Guid Id { get; set; }
        public string FirstName { get; set; }
        public string SurName { get; set; }
        public string Email { get; set; }

        public Person()
        {
            this.Id = Guid.NewGuid();
        }
    }
}
