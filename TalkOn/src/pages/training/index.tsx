//---FRONTEND CODE START---
import { FormEvent, useState } from 'react';
import { SideBar } from '../../components/sideBar';
import styles from './training.module.css';
import logo from '../../assets/talkon.png';

// Define the Message interface for TypeScript
interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export function Training() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false); // For loading state
  const [error, setError] = useState<string | null>(null); // For error handling

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (input.trim() !== '') {
      // Add the user's message to the messages array
      const userMessage: Message = { role: 'user', content: input };
      const newMessages = [...messages, userMessage];
      setMessages(newMessages);
      setInput('');
      setIsLoading(true);
      setError(null);

      try {
        // Send the messages to the backend
        const response = await fetch('http://localhost:5000/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ messages: newMessages }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Network response was not ok');
        }

        const data = await response.json();

        // Add the assistant's response to the messages array
        setMessages([...newMessages, { role: 'assistant', content: data.response }]);
      } catch (error: any) {
        console.error('Error fetching response:', error);
        if (error instanceof TypeError) {
          setError('Network error. Please check your connection and try again.');
        } else {
          setError(error.message || 'An error occurred while fetching the response. Please try again.');
        }
      } finally {
        setIsLoading(false);
      }
    }
  }

  return (
    <div className={styles.container}>
      <SideBar page="training"/>
      <section className={styles.chatBox}>
        <h1>
          <span>
            <img src={logo} alt="Logo eureka" />
          </span>
          Eureka
        </h1>
        <hr />
        <div className={styles.chat}>
          {/* Render the conversation dynamically */}
          {messages.map((message, index) => (
            <p key={index} className={message.role === 'user' ? styles.user : styles.assistant}>
              {message.content}
            </p>
          ))}
          {isLoading && <p className={styles.assistant}>Eureka esta digitando...</p>}
          {error && <p className={styles.error}>{error}</p>}
        </div>
        <form className={styles.question} onSubmit={handleSubmit}>
          <textarea
            placeholder="Pergunte para a Eureka!"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isLoading}
          />
          <button type="submit" disabled={isLoading || input.trim() === ''}>
            Enviar
          </button>
        </form>
      </section>
    </div>
  );
}
//---FRONTEND CODE END---
