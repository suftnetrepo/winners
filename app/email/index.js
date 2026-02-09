const emailTemplates = {
  prayerRequest: ({ firstName, lastName, email, message, teamName }) => `
    <mjml>
      <mj-body background-color="#f4f4f4">
        <mj-section padding-bottom="0px">
          <mj-column>
            <mj-text font-size="24px" font-weight="bold" align="center" color="#333">
              New Prayer Request
            </mj-text>
            <mj-divider border-color="#06adef" width="50px" border-width="3px"></mj-divider>
          </mj-column>
        </mj-section>
        
        <mj-section background-color="#ffffff" border-radius="8px" padding="20px">
          <mj-column>
            <mj-text font-size="16px" color="#555" line-height="24px">
              <strong>From:</strong> ${firstName} ${lastName}<br />
              <strong>Email:</strong> <a href="mailto:${email}" style="color: #06adef;">${email}</a>
            </mj-text>
            
            <mj-divider border-width="1px" border-color="#eee" />
            
            <mj-text font-size="18px" font-weight="bold" color="#333">
              Message:
            </mj-text>
            <mj-text font-size="16px" color="#555" line-height="26px" font-style="italic">
              "${message}"
            </mj-text>
            
            <mj-spacer height="20px" />
            
            <mj-text font-size="14px" color="#888">
              This request was submitted via the ${teamName} website.
            </mj-text>
          </mj-column>
        </mj-section>
        
        <mj-section>
          <mj-column>
            <mj-text align="center" color="#999" font-size="12px">
              &copy; ${new Date().getFullYear()} ${teamName} Prayer Ministry
            </mj-text>
          </mj-column>
        </mj-section>
      </mj-body>
    </mjml>
  `,
  prayerConfirmation: ({ firstName, lastName, teamName, contactEmail }) => `
    <mjml>
      <mj-body background-color="#f9f9f9">
        <mj-section padding-top="40px">
          <mj-column>
            <mj-text font-size="28px" font-weight="bold" align="center" color="#2c3e50">
              We’re Praying With You
            </mj-text>
            <mj-divider border-color="#06adef" width="60px" border-width="3px"></mj-divider>
          </mj-column>
        </mj-section>

        <mj-section background-color="#ffffff" padding="30px" border-radius="4px">
          <mj-column>
            <mj-text font-size="18px" color="#444" line-height="28px">
              Hi ${firstName} ${lastName},
              <p>
                We wanted to let you know that we have received your prayer request. Please know that our prayer team has been notified and we are standing in agreement with you.
              </p>
              <p>
                "For where two or three gather in my name, there am I with them." 
                <br /><span style="font-size: 14px; color: #888;">— Matthew 18:20</span>
              </p>
            </mj-text>
            
            <mj-button background-color="#06adef" color="white" font-size="16px" border-radius="5px" href="mailto:${contactEmail}">
              Update Your Request
            </mj-button>

            <mj-text font-size="16px" color="#444" padding-top="20px">
              Blessings,<br />
              <strong>${teamName}</strong>
            </mj-text>
          </mj-column>
        </mj-section>

        <mj-section>
          <mj-column>
            <mj-text align="center" color="#aaa" font-size="12px">
              If you did not submit this request, please disregard this email or contact us at ${contactEmail}.
            </mj-text>
          </mj-column>
        </mj-section>
      </mj-body>
    </mjml>
  `,
  testimonySubmission: ({ firstName, lastName, email, message, teamName }) => `
    <mjml>
      <mj-body background-color="#fdfdfd">
        <mj-section padding-bottom="0px">
          <mj-column>
            <mj-text font-size="24px" font-weight="bold" align="center" color="#2ecc71">
              ✨ New Testimony Shared!
            </mj-text>
            <mj-divider border-color="#2ecc71" width="50px" border-width="3px"></mj-divider>
          </mj-column>
        </mj-section>
        
        <mj-section background-color="#ffffff" border="1px solid #eee" border-radius="12px" padding="25px">
          <mj-column>
            <mj-text font-size="16px" color="#555">
              <strong>Submitted By:</strong> ${firstName} ${lastName}<br />
              <strong>Contact:</strong> ${email}
            </mj-text>
            
            <mj-divider border-width="1px" border-color="#f0f0f0" />
            
            <mj-text font-size="20px" font-weight="bold" color="#333" align="center">
              The Story:
            </mj-text>
            
            <mj-text font-size="17px" color="#444" line-height="28px" font-family="Georgia, serif">
              ${message}
            </mj-text>
            
            <mj-spacer height="20px" />
            
          </mj-column>
        </mj-section>
        
        <mj-section>
          <mj-column>
            <mj-text align="center" color="#999" font-size="12px">
              "They triumphed over him by the blood of the Lamb and by the word of their testimony."
            </mj-text>
          </mj-column>
        </mj-section>
      </mj-body>
    </mjml>
  `,
  contactSubmission: ({ firstName, lastName, email, message, teamName }) => `
    <mjml>
      <mj-body background-color="#f8fafc">
        <mj-section padding-bottom="0px">
          <mj-column>
            <mj-text font-size="24px" font-weight="bold" align="center" color="#1e293b">
              New Contact Inquiry
            </mj-text>
            <mj-divider border-color="#6366f1" width="50px" border-width="3px"></mj-divider>
          </mj-column>
        </mj-section>
        
        <mj-section background-color="#ffffff" border-radius="8px" padding="20px shadow="0 4px 6px -1px rgba(0,0,0,0.1)">
          <mj-column>
            <mj-text font-size="14px" color="#64748b" text-transform="uppercase" font-weight="bold" letter-spacing="1px">
              Sender Details
            </mj-text>
            <mj-text font-size="16px" color="#334155" line-height="24px">
              <strong>Name:</strong> ${firstName} ${lastName}<br />
              <strong>Email:</strong> ${email}
            </mj-text>
            
            <mj-divider border-width="1px" border-color="#e2e8f0" />
            
            <mj-text font-size="14px" color="#64748b" text-transform="uppercase" font-weight="bold" letter-spacing="1px">
              Inquiry / Message
            </mj-text>
            <mj-text font-size="16px" color="#334155" line-height="26px">
              ${message}
            </mj-text>
            
            <mj-spacer height="20px" />
            
            <mj-button background-color="#6366f1" color="white" font-size="16px" border-radius="4px" href="mailto:${email}">
              Reply to Message
            </mj-button>
          </mj-column>
        </mj-section>
        
        <mj-section>
          <mj-column>
            <mj-text align="center" color="#94a3b8" font-size="12px">
              This message was sent via the general contact form on the ${teamName} website.
            </mj-text>
          </mj-column>
        </mj-section>
      </mj-body>
    </mjml>
  `,
};

export { emailTemplates };
