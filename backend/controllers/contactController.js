
const Contacts=require('../models/Contact')

exports.createContact=async(req,res)=>{
    console.log("hello");
    // console.log(req.body);
    try {
        const newcontact = new Contacts(req.body);
        await newcontact.save();
        res.status(201).json({ message: "Contact saved successfully!" });
    } catch (err) {
        if (err.name === 'ValidationError') {
            const errorMessages = Object.values(err.errors).map(error => error.message);
            console.log(errorMessages)
            return res.status(400).json({ message: errorMessages });
        }
        res.status(500).json({ message: 'Server Error' });
    }
};
exports.getContacts=async (req, res) => {
    try {
        const contacts = await Contacts.find({});
        res.status(200).json(contacts);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Failed to fetch contacts' });
    }
}
exports.updateContact=async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        console.log(id);
        console.log(data);
        
        const result = await Contacts.findByIdAndUpdate(id, data, { new: true, runValidators: true });

        if (!result) {
            return res.status(404).json({ message: 'Contact not found' });
        }

        res.status(200).json({ message: 'Updated Successfully' });
    } catch (err) {
        if (err.name === 'ValidationError') {
            const errorMessages = Object.values(err.errors).map(error => error.message);
            return res.status(400).json({ message: errorMessages });
        }
        res.status(500).json({ message: 'Failed to Update' });
    }
}
exports.deleteContact=async (req, res) => {
        let id  = req.params.id;
        // id=id.substring(1)
        
      
    
        try {
            
            const result =await Contacts.findOneAndDelete({_id: id});
    
            if (!result) {
                return res.status(404).json({ message: 'Contact not found' });
            }
    
            return res.status(200).json({ message: 'Deleted Successfully' });
        } catch (err) {
            console.log('Error deleting contact:', err);
            return res.status(500).json({ message: 'Server Error' });
        }
}