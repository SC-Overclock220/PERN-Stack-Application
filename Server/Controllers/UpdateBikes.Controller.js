const updateBikes = async (req, res) => {


    const { id } = req.params;


    try {

    } catch (error) {


        console.log(error);
        return res.status(500).json({ success: false, message: `Internal Server Error` });


    }

}