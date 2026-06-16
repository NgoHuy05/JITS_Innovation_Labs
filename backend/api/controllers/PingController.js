module.exports = {
  ping: async (req, res) => {
    try {
      return res.status(200).json({
        err: 200,
        message: 'pong',
        data: null
      });
    } catch (err) {
      console.log(err);
      return res.status(200).json({
        err: 500,
        message: 'loi he thong',
        data: null
      });
    }
  },

  hello: async (req, res) => {
    try {
      return res.json({err: 200, message: 'hello huy dep trai', data: {name: 'huy', fullName: 'ngoduchuy'}});
    } catch (err) {
      console.log(err);
      return res.status(200).json({
        err: 500,
        message: 'loi he thong',
        data: null
      });
    }
  }
};
