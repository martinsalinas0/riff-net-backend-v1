import express, { Request, Response } from "express";

const app = express();
app.use(express.json());

app.get("/", async (_req: Request, res: Response) => {
  try {
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).send("Database connection failed");
  }
});

// --- Test API route ---
app.get("/api", (_req: Request, res: Response) => {
  res.status(200).json({ message: "Server is running", status: "success" });
});

// import { usersRoutes } from "./routes/users.routes";
// import { jobsRoutes } from "./routes/jobs.routes";
// import { quotesRoutes } from "./routes/quotes.routes";
// import { customerInvoicesRoutes } from "./routes/customerInvoices.routes";
// import { contractorInvoicesRoutes } from "./routes/contractorInvoices.routes";
// import { taskRequestsRoutes } from "./routes/taskRequests.routes";
// import { jobNotesRoutes } from "./routes/jobNotes.routes";
// import { quoteLineItemsRoutes } from "./routes/quoteLineItems.routes";
// import { paymentsRoutes } from "./routes/payments.routes";
// import { notificationsRoutes } from "./routes/notifications.routes";
// import { emailLogRoutes } from "./routes/emailLog.routes";
// import auditLogRouter from "./routes/auditLog.routes";
// import { settingsRoutes } from "./routes/settings.routes";
// import { authRoutes } from "./routes/auth.routes";
// import { customerRoutes } from "./routes/customer.routes";
// import { contractorsRoutes } from "./routes/contractor.routes";
// import { jobPhotosRoutes } from "./routes/jobPhoto.routes";

// app.use("/api/v1/auth", authRoutes);
// app.use("/api/v1/users", usersRoutes);
// app.use("/api/v1/customers", customerRoutes);
// app.use("/api/v1/contractors", contractorsRoutes);
// app.use("/api/v1/jobs", jobsRoutes);
// app.use("/api/v1/quotes", quotesRoutes);
// app.use("/api/v1/customer-invoices", customerInvoicesRoutes);
// app.use("/api/v1/contractor-invoices", contractorInvoicesRoutes);
// app.use("/api/v1/task-requests", taskRequestsRoutes);
// app.use("/api/v1/job-photos", jobPhotosRoutes);
// app.use("/api/v1/job-notes", jobNotesRoutes);
// app.use("/api/v1/quote-line-items", quoteLineItemsRoutes);
// app.use("/api/v1/payments", paymentsRoutes);
// app.use("/api/v1/notifications", notificationsRoutes);
// app.use("/api/v1/email-log", emailLogRoutes);
// app.use("/api/v1/audit-log", auditLogRouter);
// app.use("/api/v1/settings", settingsRoutes);

export default app;
