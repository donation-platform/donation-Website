// const Payment = require("../models/payment");


// exports.createPayment = async (req, res) => {
//   try {
//     console.log("🔍 الطلب المستلم من الـ Frontend:", req.body); // ✅ طباعة الطلب في السيرفر للتحقق

//     const {
//       userId,
//       itemId,
//       email,
//       paymentMethod,
//       nameOfCard,
//       numOfCard,
//       month,
//       year,
//       code,
//       amount,
//     } = req.body;

//     // ✅ التحقق من وجود جميع الحقول
//     if (
//       !userId ||
//       !itemId ||
//       !email ||
//       !paymentMethod ||
//       !nameOfCard ||
//       !numOfCard ||
//       !month ||
//       !year ||
//       !code ||
//       !amount
//     ) {
//       console.log("❌ خطأ: هناك حقول مفقودة");
//       return res.status(400).json({ message: "❌ جميع الحقول مطلوبة!" });
//     }

//     // ✅ التأكد من أن البيانات تأتي كأنواع صحيحة
//     if (
//       typeof userId !== "string" ||
//       typeof itemId !== "string" ||
//       typeof email !== "string" ||
//       typeof paymentMethod !== "string" ||
//       typeof nameOfCard !== "string" ||
//       typeof numOfCard !== "string" ||
//       typeof month !== "string" ||
//       typeof year !== "string" ||
//       typeof code !== "string" ||
//       typeof amount !== "string"
//     ) {
//       console.log("❌ خطأ: بعض البيانات ليست بالنوع الصحيح");
//       return res
//         .status(400)
//         .json({ message: "❌ هناك خطأ في نوع البيانات المرسلة!" });
//     }

//     // ✅ طباعة البيانات بعد التأكد من صحتها
//     console.log("✅ البيانات جاهزة للتخزين:", {
//       userId,
//       itemId,
//       email,
//       paymentMethod,
//       nameOfCard,
//       numOfCard,
//       month,
//       year,
//       code,
//       amount,
//     });

//     // ✅ إنشاء الدفع
//     const payment = await Payment.create({
//       userId,
//       itemId,
//       email,
//       paymentMethod,
//       nameOfCard,
//       numOfCard,
//       month,
//       year,
//       code,
//       amount,
//     });
//     res.status(201).json({ message: "✅ تم إنشاء الدفع بنجاح", payment });
//   } catch (error) {
//     console.error("❌ خطأ أثناء إنشاء الدفع:", error);
//     res
//       .status(500)
//       .json({ message: "حدث خطأ أثناء إنشاء الدفع", error: error.message });
//   }
// };

// exports.getPayments = async (req, res) => {
//   try {
//     const payments = await Payment.findAll();
//     res.status(200).json(payments);
//   } catch (error) {
//     res.status(500).json({ message: "حدث خطأ أثناء جلب الدفعات", error });
//   }
// };

// exports.getPaymentById = async (req, res) => {
//   try {
//     const payment = await Payment.findByPk(req.params.id);
//     if (!payment) {
//       return res.status(404).json({ message: "لم يتم العثور على الدفع" });
//     }
//     res.status(200).json(payment);
//   } catch (error) {
//     res.status(500).json({ message: "حدث خطأ أثناء جلب الدفع", error });
//   }
// };

// exports.updatePayment = async (req, res) => {
//   try {
//     const payment = await Payment.findByPk(req.params.id);
//     if (!payment) {
//       return res.status(404).json({ message: "لم يتم العثور على الدفع" });
//     }
//     await payment.update(req.body);
//     res.status(200).json({ message: "تم تحديث الدفع بنجاح", payment });
//   } catch (error) {
//     res.status(500).json({ message: "حدث خطأ أثناء تحديث الدفع", error });
//   }
// };

// exports.deletePayment = async (req, res) => {
//   try {
//     const payment = await Payment.findByPk(req.params.id);
//     if (!payment) {
//       return res.status(404).json({ message: "لم يتم العثور على الدفع" });
//     }
//     await payment.destroy();
//     res.status(200).json({ message: "تم حذف الدفع بنجاح" });
//   } catch (error) {
//     res.status(500).json({ message: "حدث خطأ أثناء حذف الدفع", error });
//   }
// };




const Payment = require("../models/payment");
const Request = require("../models/requests"); // تأكد من استيراد نموذج الطلبات

exports.createPayment = async (req, res) => {
  try {
    console.log("🔍 الطلب المستلم من الـ Frontend:", req.body); // ✅ طباعة الطلب في السيرفر للتحقق

    const {
      userId,
      itemId,
      email,
      paymentMethod,
      nameOfCard,
      numOfCard,
      month,
      year,
      code,
      amount,
    } = req.body;

    // ✅ التحقق من وجود جميع الحقول
    if (
      !userId ||
      !itemId ||
      !email ||
      !paymentMethod ||
      !nameOfCard ||
      !numOfCard ||
      !month ||
      !year ||
      !code ||
      !amount
    ) {
      console.log("❌ خطأ: هناك حقول مفقودة");
      return res.status(400).json({ message: "❌ جميع الحقول مطلوبة!" });
    }

    // ✅ التأكد من أن البيانات تأتي كأنواع صحيحة
    if (
      typeof userId !== "string" ||
      typeof itemId !== "string" ||
      typeof email !== "string" ||
      typeof paymentMethod !== "string" ||
      typeof nameOfCard !== "string" ||
      typeof numOfCard !== "string" ||
      typeof month !== "string" ||
      typeof year !== "string" ||
      typeof code !== "string" ||
      typeof amount !== "string"
    ) {
      console.log("❌ خطأ: بعض البيانات ليست بالنوع الصحيح");
      return res
        .status(400)
        .json({ message: "❌ هناك خطأ في نوع البيانات المرسلة!" });
    }

    // ✅ طباعة البيانات بعد التأكد من صحتها
    console.log("✅ البيانات جاهزة للتخزين:", {
      userId,
      itemId,
      email,
      paymentMethod,
      nameOfCard,
      numOfCard,
      month,
      year,
      code,
      amount,
    });

    // ✅ إنشاء الدفع
    const payment = await Payment.create({
      userId,
      itemId,
      email,
      paymentMethod,
      nameOfCard,
      numOfCard,
      month,
      year,
      code,
      amount,
    });

    // تحديث جدول الطلبات
    const request = await Request.findOne({ where: { id: itemId } });
    if (request) {
      const newAmountRaised = parseFloat(request.amount_raised) + parseFloat(amount);
      await request.update({ amount_raised: newAmountRaised });
    }

    res.status(201).json({ message: "✅ تم إنشاء الدفع بنجاح", payment });
  } catch (error) {
    console.error("❌ خطأ أثناء إنشاء الدفع:", error);
    res
      .status(500)
      .json({ message: "حدث خطأ أثناء إنشاء الدفع", error: error.message });
  }
};

exports.getPayments = async (req, res) => {
  try {
    const payments = await Payment.findAll();
    res.status(200).json(payments);
  } catch (error) {
    res.status(500).json({ message: "حدث خطأ أثناء جلب الدفعات", error });
  }
};

exports.getPaymentById = async (req, res) => {
  try {
    const payment = await Payment.findByPk(req.params.id);
    if (!payment) {
      return res.status(404).json({ message: "لم يتم العثور على الدفع" });
    }
    res.status(200).json(payment);
  } catch (error) {
    res.status(500).json({ message: "حدث خطأ أثناء جلب الدفع", error });
  }
};

exports.updatePayment = async (req, res) => {
  try {
    const payment = await Payment.findByPk(req.params.id);
    if (!payment) {
      return res.status(404).json({ message: "لم يتم العثور على الدفع" });
    }
    await payment.update(req.body);
    res.status(200).json({ message: "تم تحديث الدفع بنجاح", payment });
  } catch (error) {
    res.status(500).json({ message: "حدث خطأ أثناء تحديث الدفع", error });
  }
};

exports.deletePayment = async (req, res) => {
  try {
    const payment = await Payment.findByPk(req.params.id);
    if (!payment) {
      return res.status(404).json({ message: "لم يتم العثور على الدفع" });
    }
    await payment.destroy();
    res.status(200).json({ message: "تم حذف الدفع بنجاح" });
  } catch (error) {
    res.status(500).json({ message: "حدث خطأ أثناء حذف الدفع", error });
  }
};