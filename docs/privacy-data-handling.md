# Privacy and data-handling baseline

**Status:** Internal design baseline, not a published privacy policy or legal compliance certification.

## Data minimisation
- Collect only information needed for a clearly stated feature.
- Do not request CNIC, passport, financial, medical, family, case, or academic-record documents unless strictly necessary and approved.
- Do not put secrets, access tokens, API keys, passwords, or private client documents in source control, issues, analytics, or public logs.
- Prefer anonymous access for public learning resources.

## Before collecting personal data
A feature owner must document:
1. Purpose and lawful basis for collection.
2. Data fields and whether any are sensitive.
3. Who can access the information and why.
4. Storage location, security controls, backups, and processors.
5. Retention period and deletion method.
6. User notice, consent where required, and rights/complaint contact.
7. Breach detection, response, and notification procedure.

## Legal enquiries and documents
Legal enquiries may contain highly confidential and sensitive information. Until a secure, professionally reviewed intake system exists:
- Do not invite users to upload case files or identity documents.
- Do not send user submissions to public AI tools or analytics.
- Do not expose enquiries in public issue trackers or shared inboxes.
- Do not share information with a referral advocate without explicit consent and a clear purpose.
- A conflict check and secure transfer process must exist before case-specific intake.

## Technical requirements
- Keep credentials in approved secret stores and out of Git history.
- Enforce least-privilege access and multi-factor authentication for maintainers.
- Use HTTPS and secure session handling for any future account system.
- Validate and limit file uploads; scan files; store them outside public web roots.
- Avoid logging message bodies, legal documents, passwords, tokens, and unnecessary identifiers.
- Define deletion and backup-expiry procedures.
- Review dependencies and security updates regularly.

## Transparency
The public privacy notice must accurately identify the legal entity/operator, actual data collected, purposes, processors, hosting locations, retention, user choices, contact channel, and applicable jurisdiction. Do not publish this baseline as if it were the final notice.
