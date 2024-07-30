'use client'

import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { GitHub, Instagram, Mail } from 'react-feather'
import { Linkedin } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Textarea } from '../ui/textarea'
import { useForm } from 'react-hook-form'
import {
    ContactInput,
    contactInputValidator,
} from '@/validators/contact.validator'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { useToast } from '../ui/use-toast'

function ContactSection() {
    const { toast } = useToast()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ContactInput>({
        resolver: zodResolver(contactInputValidator),
    })
    const handleFormSubmit = async (data: ContactInput) => {
        try {
            await axios.post('/api/contact', data)
            toast({ title: 'Your message was send successfully!' })
        } catch (err) {
            console.error(err)
            toast({
                title: 'Error Sending Message!',
            })
        }
    }
    return (
        <section id="contact" className="w-full px-10 max-w-7xl mx-auto py-28">
            <h2 className="text-primary md:text-6xl text-5xl font-semibold mb-10">
                Contact Me
            </h2>
            <div className="w-full grid grid-cols-1  lg:grid-cols-2 gap-10">
                <div className="contacts w-full flex-col flex justify-between gap-5">
                    <div className="flex items-center w-full justify-left text-xl lg:text-2xl gap-5 font-bold p-3 lg:p-5 bg-accent/10 rounded-xl">
                        <img
                            src="https://cdn-icons-png.freepik.com/256/2335/2335349.png?ga=GA1.1.2076789743.1718763143&semt=ais_hybrid"
                            style={{ width: '50px' }}
                        />
                        <p>Discord : pytchief</p>
                    </div>
                    <div className="flex items-center w-full justify-left text-xl lg:text-2xl gap-5 font-bold p-3 lg:p-5 bg-accent/10 rounded-xl">
                        <img
                            src="https://cdn-icons-png.freepik.com/256/14871/14871337.png?ga=GA1.1.2076789743.1718763143&semt=ais_hybrid"
                            style={{ width: '50px' }}
                        />
                        <p>Telegram :pytchief</p>
                    </div>
                </div>
                <form
                    onSubmit={handleSubmit(handleFormSubmit)}
                    className="form w-full h-full overflow-hidden flex-col flex gap-5"
                >
                    <Input
                        {...register('name')}
                        type="text"
                        placeholder="Name"
                    />
                    {errors.name && (
                        <p className="text-destructive -mt-3 -mb-2">
                            Please enter your name
                        </p>
                    )}
                    <Input
                        {...register('email')}
                        type="email"
                        placeholder="Email"
                    />
                    {errors.email && (
                        <p className="text-destructive -mt-3 -mb-2">
                            Please enter a valid email address
                        </p>
                    )}
                    <Textarea
                        {...register('message')}
                        placeholder="Type your message here."
                        className="resize-none flex-1 h-full"
                    />
                    {errors.message && (
                        <p className="text-destructive -mt-3 -mb-2">
                            Please enter a message
                        </p>
                    )}
                    <Button className="w-full text-xl font-medium">
                        Send Message
                    </Button>
                </form>
            </div>
        </section>
    )
}

export default ContactSection
