# Security Policy

## Supported Versions

We release patches for security vulnerabilities. The following versions are currently being supported with security updates:

| Version | Supported          |
| ------- | ------------------ |
| 1.x.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

We take the security of Blank UI seriously. If you believe you have found a security vulnerability, please report it to us as described below.

### How to Report

**Please do not report security vulnerabilities through public GitHub issues.**

Instead, please report them via email at **[INSERT SECURITY EMAIL]** or create a draft security advisory on GitHub.

You should receive a response within **48 hours** acknowledging your report. After the initial reply, we will keep you informed of the progress toward a fix and announcement.

### What to Include

To help us triage your report quickly, please include the following information:

- **Type of issue** (e.g., buffer overflow, SQL injection, cross-site scripting, etc.)
- **Full paths** of source file(s) related to the issue
- **Location** of the affected source code (tag/branch/commit or direct URL)
- **Step-by-step instructions** to reproduce the issue
- **Proof-of-concept** or exploit code (if possible)
- **Impact** of the issue, including how an attacker might exploit it

### Preferred Languages

We prefer all communications to be in English.

## Security Best Practices

When using Blank UI in your projects, follow these security best practices:

### 1. Keep Dependencies Updated

Regularly update Blank UI and its dependencies to the latest version:

```bash
npm update @wported/blank-ui
```

### 2. Validate User Input

Always validate and sanitize user input before passing it to any component:

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { BlInput } from '@wported/blank-ui'

const userInput = ref('')

// Validate input before submission
const validateInput = () => {
  // Your validation logic here
}
</script>
```

### 3. Use HTTPS

Always serve your application over HTTPS in production to protect data in transit.

### 4. Content Security Policy (CSP)

Implement a Content Security Policy to prevent XSS attacks:

```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'">
```

### 5. Avoid Using eval()

Never use `eval()` or similar functions with user-provided data.

## Disclosure Process

We follow a coordinated disclosure process:

1. **Report Received**: We acknowledge receipt of your vulnerability report
2. **Assessment**: We investigate and assess the reported issue
3. **Fix Development**: We develop a fix for the vulnerability
4. **Testing**: We test the fix thoroughly
5. **Release**: We release a patched version
6. **Disclosure**: After 30 days from the release, we publicly disclose the vulnerability

## Recognition

We appreciate responsible disclosure and will acknowledge contributors who report security vulnerabilities (unless they prefer to remain anonymous).

## Contact

For any security-related questions or concerns, please contact us at:

- **Email**: [INSERT SECURITY EMAIL]
- **GitHub Security Advisories**: https://github.com/[YOUR-REPO]/blank-ui/security/advisories

---

Thank you for helping keep Blank UI and our users safe! 🔒
