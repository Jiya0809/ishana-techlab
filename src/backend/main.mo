import Time "mo:core/Time";
import List "mo:core/List";
import Map "mo:core/Map";
import Order "mo:core/Order";
import Array "mo:core/Array";
import Nat "mo:core/Nat";
import Text "mo:core/Text";
import Iter "mo:core/Iter";
import Int "mo:core/Int";

actor {
  type Service = {
    id : Nat;
    title : Text;
    description : Text;
    iconName : Text;
    content : Text;
  };

  type TeamMember = {
    id : Nat;
    name : Text;
    role : Text;
    bio : Text;
    image : Text;
  };

  type ContactSubmission = {
    name : Text;
    email : Text;
    subject : Text;
    message : Text;
    timestamp : Time.Time;
  };

  module Service {
    public func compare(s1 : Service, s2 : Service) : Order.Order {
      Nat.compare(s1.id, s2.id);
    };
  };

  module TeamMember {
    public func compare(t1 : TeamMember, t2 : TeamMember) : Order.Order {
      Nat.compare(t1.id, t2.id);
    };
  };

  module ContactSubmission {
    public func compareByTimestamp(c1 : ContactSubmission, c2 : ContactSubmission) : Order.Order {
      Int.compare(c1.timestamp, c2.timestamp);
    };
  };

  let services = Map.empty<Nat, Service>();
  let teamMembers = Map.empty<Nat, TeamMember>();
  let contactSubmissions = List.empty<ContactSubmission>();

  var isSeeded = false;

  public shared ({ caller }) func submitContact(name : Text, email : Text, subject : Text, message : Text) : async () {
    let submission : ContactSubmission = {
      name;
      email;
      subject;
      message;
      timestamp = Time.now();
    };
    contactSubmissions.add(submission);
  };

  public shared ({ caller }) func seedData() : async () {
    if (isSeeded) { return };
    services.add(
      1,
      {
        id = 1;
        title = "Cloud Solutions";
        description = "Scalable cloud computing services";
        iconName = "cloud";
        content = "we offer secure and scalable cloud solutions tailored to your business needs.";
      },
    );
    services.add(
      2,
      {
        id = 2;
        title = "Cybersecurity";
        description = "Comprehensive digital protection";
        iconName = "security";
        content = "Protect your business from cyber threats with our advanced cybersecurity solutions.";
      },
    );
    services.add(
      3,
      {
        id = 3;
        title = "IT Consulting";
        description = "Expert technology advice";
        iconName = "consulting";
        content = "Our experienced consultants provide strategic IT guidance to help you achieve your goals.";
      },
    );
    services.add(
      4,
      {
        id = 4;
        title = "Managed IT";
        description = "Proactive IT management";
        iconName = "managed";
        content = "Let us handle your IT infrastructure and support needs so you can focus on your core business.";
      },
    );
    services.add(
      5,
      {
        id = 5;
        title = "Software Development";
        description = "Custom software solutions";
        iconName = "software";
        content = "We design, build, and maintain custom software applications to streamline your operations.";
      },
    );
    services.add(
      6,
      {
        id = 6;
        title = "Data Analytics";
        description = "Data-driven insights";
        iconName = "analytics";
        content = "Unlock the power of your data with our advanced analytics and business intelligence solutions.";
      },
    );
    teamMembers.add(
      1,
      {
        id = 1;
        name = "Alice Smith";
        role = "CEO";
        bio = "Alice leads the company with over 20 years of experience in IT management.";
        image = "alice.png";
      },
    );
    teamMembers.add(
      2,
      {
        id = 2;
        name = "Bob Johnson";
        role = "CTO";
        bio = "Bob oversees all technology initiatives and ensures our services are cutting-edge.";
        image = "bob.png";
      },
    );
    teamMembers.add(
      3,
      {
        id = 3;
        name = "Carol Williams";
        role = "Lead Developer";
        bio = "Carol manages the software development team and drives innovation.";
        image = "carol.png";
      },
    );
    teamMembers.add(
      4,
      {
        id = 4;
        name = "David Brown";
        role = "Cybersecurity Specialist";
        bio = "David protects our clients from digital threats and secures their data.";
        image = "david.png";
      },
    );
    isSeeded := true;
  };

  public query ({ caller }) func getServices() : async [Service] {
    services.values().toArray().sort();
  };

  public query ({ caller }) func getTeamMembers() : async [TeamMember] {
    teamMembers.values().toArray().sort();
  };

  public query ({ caller }) func getContactSubmissions() : async [ContactSubmission] {
    contactSubmissions.toArray().sort(ContactSubmission.compareByTimestamp);
  };
};
