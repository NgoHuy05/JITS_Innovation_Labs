module.exports = {
  create: async (req, res) => {
    try {
      const {name, age} = req.body;
      if (!name || !age) {
        return res.status(200).json({err: 400, message: 'vui long dien day du thong tin'});
      }
      await User.create({name, age});
      return res.status(200).json({err: 200, message: 'tao nguoi dung thanh cong'});
    } catch (err) {
      console.log(err);
      return res.status(200).json({
        err: 500,
        message: 'loi tao nguoi dung',
        data: null
      });
    }
  }
};
