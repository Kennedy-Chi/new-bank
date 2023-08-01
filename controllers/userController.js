const { token } = require("morgan");
const User = require("../models/userModel");
const Related = require("../models/relatedModel");
const Account = require("../models/accountsModel");
const Transaction = require("../models/transactionModel");
const AppError = require("../utils/appError");
const APIFeatures = require("../utils/apiFeatures");
const catchAsync = require("../utils/catchAsync");
const { ObjectId } = require("mongodb");

exports.getAllUsers = catchAsync(async (req, res, next) => {
  // 1A) FILTERING

  // 2) SORTING

  // 3) FIELDS

  // 4) PAGINATION

  const result = new APIFeatures(User.find(), req.query)
    .filter()
    .sort()
    .limitFields();

  const resultLen = await result.query;

  const features = result.paginate();

  const users = await features.query.clone();

  res.status(200).json({
    status: "success",
    length: resultLen.length,
    data: users,
  });
});

exports.getAUser = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(new AppError("No user found with that ID", 404));
  }
  res.status(200).json({
    status: "success",
    data: user,
  });
});

exports.editUser = catchAsync(async (req, res, next) => {
  let files = [];
  const oldUser = await User.findById(req.params.id);

  if (req.body.balance) {
    await Account.findByIdAndUpdate(req.body.accountId, {
      $inc: {
        balance: req.body.balance,
      },
    });
  }

  if (req.files) {
    if (req.files.profilePicture) {
      if (req.files.profilePicture) {
        req.body.profilePicture = req.files.profilePicture[0].filename;
        files.push(oldUser.profilePicture);
      }
      if (req.files.idPicture) {
        req.body.idPicture = req.files.idPicture[0].filename;
        files.push(oldUser.idPicture);
      }
    }
  }

  let totalBalance = oldUser.totalBalance * 1 + req.body.balance * 1;

  req.body.password = undefined;
  req.body.cPassword = undefined;

  req.body.totalBalance = totalBalance;

  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    // runValidators: true,
  });

  if (!user) {
    return next(new AppError("No user found with that ID", 404));
  }

  req.fileNames = files;

  req.user = user;

  next();
});

exports.getRelatedData = catchAsync(async (req, res, next) => {
  const related = await Related.findOne({ username: req.params.username });

  if (!related) {
    return next(new AppError("No user found with that ID", 404));
  }
  res.status(200).json({
    status: "success",
    data: related,
  });
});

exports.searchUser = async (req, res) => {
  const account = await Account.findOne({
    accountNumber: req.params.number,
  });
  res.status(200).json({
    status: "success",
    account: account,
  });
};

exports.deleteUser = catchAsync(async (req, res, next) => {
  const user = await User.findByIdAndDelete(req.params.id);
  await Related.findOneAndDelete({ username: user.username });
  await Account.findOneAndDelete({ username: user.username });
  await Transaction.deleteMany({
    $or: [{ username: user.username, receiverUsername: user.username }],
  });

  next();
});

exports.resetUsers = catchAsync(async (req, res, next) => {
  await User.updateMany({ $set: { totalBalance: 0 } });
  await Wallet.updateMany({
    $set: {
      balance: 0,
      totalDeposit: 0,
      pendingDeposit: 0,
      totalWithdrawal: 0,
      pendingWithdrawal: 0,
    },
  });
  await Transaction.deleteMany();
  await History.deleteMany();
  await Active.deleteMany();
  await Earning.deleteMany();

  res.status(200).json({
    status: "success",
  });
});

exports.resetUser = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  await User.updateMany({ _id: req.params.id }, { $set: { totalBalance: 0 } });
  await Wallet.updateMany(
    { username: user.username },
    {
      $set: {
        balance: 0,
        totalDeposit: 0,
        pendingDeposit: 0,
        totalWithdrawal: 0,
        pendingWithdrawal: 0,
      },
    }
  );
  await Transaction.deleteMany({ username: user.username });
  await History.deleteMany({ username: user.username });
  await Active.deleteMany({ username: user.username });
  await Earning.deleteMany({ username: user.username });

  res.status(200).json({
    status: "success",
  });
});
