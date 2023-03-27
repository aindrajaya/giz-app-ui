export default function handler(req, res) {
    const users = [
      { id: 1, name: 'John Doe', email: 'johndoe@example.com' },
      { id: 2, name: 'Doe John', email: 'doejohn@example.com' },
    ]
  
    res.status(200).json(users);
  }